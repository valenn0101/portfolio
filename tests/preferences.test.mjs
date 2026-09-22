import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getBrowserLanguage, resolveLanguage, readPreference, writePreference } from "../src/lib/preferences.ts";

describe("browser language selection", () => {
  it("supports regional language codes", () => {
    for (const locale of ["es", "es-AR", "es-ES", "ES_ar"]) {
      assert.equal(resolveLanguage([locale]), "es");
    }
    for (const locale of ["en", "en-US", "en-GB", "EN_gb"]) {
      assert.equal(resolveLanguage([locale]), "en");
    }
  });

  it("uses the first supported language in the browser's preference order", () => {
    assert.equal(resolveLanguage(["fr-FR", "es-AR", "en-US"]), "es");
    assert.equal(resolveLanguage(["en-GB", "es-AR"]), "en");
    assert.equal(resolveLanguage(["es-AR", "en-GB"]), "es");
  });

  it("falls back to English for unsupported or empty preferences", () => {
    assert.equal(resolveLanguage(["fr-FR", "de"]), "en");
    assert.equal(resolveLanguage([]), "en");
  });

  it("respects a manual choice over the detected language", () => {
    assert.equal(resolveLanguage(["en-US"], "es"), "es");
    assert.equal(resolveLanguage(["es-AR"], "en"), "en");
  });

  it("ignores invalid saved preferences", () => {
    for (const preference of [null, undefined, "", "fr", "es-AR"]) {
      assert.equal(resolveLanguage(["es-AR"], preference), "es");
    }
  });

  it("reads the browser's language list, with a primary-language fallback", () => {
    const previousNavigator = Object.getOwnPropertyDescriptor(globalThis, "navigator");
    try {
      const browserNavigator = { languages: ["es-AR", "en-US"], language: "en-US" };
      Object.defineProperty(globalThis, "navigator", { configurable: true, value: browserNavigator });
      assert.equal(getBrowserLanguage(), "es");
      browserNavigator.languages = ["en-GB", "es-AR"];
      assert.equal(getBrowserLanguage(), "en");
      browserNavigator.languages = [];
      browserNavigator.language = "es-AR";
      assert.equal(getBrowserLanguage(), "es");
    } finally {
      if (previousNavigator) Object.defineProperty(globalThis, "navigator", previousNavigator);
      else delete globalThis.navigator;
    }
  });
});

describe("restricted browser storage", () => {
  it("does not prevent the site from working when storage access throws", () => {
    const previousWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
    try {
      Object.defineProperty(globalThis, "window", {
        configurable: true,
        value: { get localStorage() { throw new Error("Storage is blocked"); } },
      });
      assert.equal(readPreference("portfolio.language"), null);
      assert.doesNotThrow(() => writePreference("portfolio.language", "es"));
    } finally {
      if (previousWindow) Object.defineProperty(globalThis, "window", previousWindow);
      else delete globalThis.window;
    }
  });
});
