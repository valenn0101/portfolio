import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: number;
  gradient: string;
}

export function Blog() {
  const { t } = useLanguage();

  const posts: BlogPost[] = [
    {
      id: 1,
      title: t('post.1.title'),
      description: t('post.1.desc'),
      category: 'Cloud',
      readTime: 5,
      gradient: 'from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20',
    },
    {
      id: 2,
      title: t('post.2.title'),
      description: t('post.2.desc'),
      category: 'Product',
      readTime: 8,
      gradient: 'from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20',
    },
    {
      id: 3,
      title: t('post.3.title'),
      description: t('post.3.desc'),
      category: 'TypeScript',
      readTime: 6,
      gradient: 'from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20',
    },
    {
      id: 4,
      title: t('post.4.title'),
      description: t('post.4.desc'),
      category: 'Team',
      readTime: 4,
      gradient: 'from-indigo-100 to-pink-100 dark:from-indigo-900/20 dark:to-pink-900/20',
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
            {t('blog.title')}
          </h2>
          <p className="text-muted-foreground">{t('blog.subtitle')}</p>
        </div>
        <a 
          href="#" 
          className="text-primary hover:text-primary/80 transition-colors text-sm font-medium hidden md:block hover:underline underline-offset-4"
        >
          {t('blog.all')}
        </a>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer"
          >
            {/* Image placeholder */}
            <div className={`aspect-video rounded-2xl bg-gradient-to-br ${post.gradient} mb-4 overflow-hidden border border-border/50`}>
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <Badge variant="outline" className="text-xs font-normal">
                {post.category}
              </Badge>
              <span>•</span>
              <span>{post.readTime} {t('blog.readTime')}</span>
            </div>
            
            {/* Content */}
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-2 text-foreground">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {post.description}
            </p>
          </article>
        ))}
      </div>

      {/* Mobile link */}
      <div className="mt-8 text-center md:hidden">
        <a 
          href="#" 
          className="text-primary hover:text-primary/80 transition-colors text-sm font-medium hover:underline underline-offset-4"
        >
          {t('blog.all')}
        </a>
      </div>
    </section>
  );
}
