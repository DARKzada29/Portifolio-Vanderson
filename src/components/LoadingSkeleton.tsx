'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export const Skeleton = ({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
  lines = 1
}: SkeletonProps) => {
  const baseClasses = "bg-gradient-to-r from-muted/50 via-muted/80 to-muted/50 animate-pulse";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg"
  };

  const style = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%')
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: index === lines - 1 ? '75%' : '100%'
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
};

// Skeleton específico para cards de projeto
export const ProjectCardSkeleton = () => (
  <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden">
    <Skeleton height="200px" className="rounded-none" />
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-3">
        <Skeleton width="60px" height="20px" />
        <Skeleton width="80px" height="20px" />
      </div>
      <Skeleton variant="text" lines={2} className="mb-4" />
      <Skeleton variant="text" lines={3} className="mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton width="60px" height="24px" />
        <Skeleton width="80px" height="24px" />
        <Skeleton width="70px" height="24px" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton width="100px" height="32px" />
        <Skeleton width="80px" height="32px" />
      </div>
    </div>
  </div>
);

// Skeleton específico para posts do blog
export const BlogPostSkeleton = () => (
  <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden">
    <Skeleton height="200px" className="rounded-none" />
    <div className="p-6">
      <div className="flex items-center space-x-4 text-sm mb-3">
        <Skeleton width="100px" height="16px" />
        <Skeleton width="60px" height="16px" />
      </div>
      <Skeleton variant="text" lines={2} className="mb-3" />
      <Skeleton variant="text" lines={3} className="mb-4" />
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <Skeleton width="50px" height="20px" />
          <Skeleton width="60px" height="20px" />
        </div>
        <Skeleton width="80px" height="20px" />
      </div>
    </div>
  </div>
);

// Skeleton específico para certificações
export const CertificationSkeleton = () => (
  <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden">
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Skeleton variant="circular" width="48px" height="48px" />
          <Skeleton width="100px" height="24px" />
        </div>
      </div>
      <Skeleton variant="text" lines={2} className="mb-2" />
      <Skeleton width="120px" height="20px" className="mb-3" />
      <Skeleton variant="text" lines={3} className="mb-4" />
      <div className="flex flex-col space-y-2 mb-4">
        <Skeleton width="150px" height="16px" />
        <Skeleton width="130px" height="16px" />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton width="60px" height="20px" />
        <Skeleton width="80px" height="20px" />
        <Skeleton width="70px" height="20px" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton width="80px" height="16px" />
        <Skeleton width="120px" height="20px" />
      </div>
    </div>
  </div>
);

// Skeleton para lista de itens
export const ListSkeleton = ({ items = 5 }: { items?: number }) => (
  <div className="space-y-4">
    {Array.from({ length: items }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50"
      >
        <Skeleton variant="circular" width="40px" height="40px" />
        <div className="flex-1">
          <Skeleton variant="text" className="mb-2" />
          <Skeleton variant="text" width="60%" />
        </div>
        <Skeleton width="80px" height="32px" />
      </motion.div>
    ))}
  </div>
);

// Skeleton para página completa
export const PageSkeleton = () => (
  <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <Skeleton width="200px" height="32px" className="mx-auto mb-6" />
        <Skeleton width="400px" height="48px" className="mx-auto mb-6" />
        <Skeleton variant="text" lines={2} className="max-w-3xl mx-auto" />
      </div>

      {/* Content Grid Skeleton */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    </div>
  </div>
);

// Skeleton para formulário
export const FormSkeleton = () => (
  <div className="space-y-6">
    <div>
      <Skeleton width="100px" height="20px" className="mb-2" />
      <Skeleton height="40px" />
    </div>
    <div>
      <Skeleton width="80px" height="20px" className="mb-2" />
      <Skeleton height="40px" />
    </div>
    <div>
      <Skeleton width="120px" height="20px" className="mb-2" />
      <Skeleton height="120px" />
    </div>
    <Skeleton width="120px" height="40px" />
  </div>
);

// Skeleton para navegação
export const NavSkeleton = () => (
  <div className="flex items-center justify-between h-16 px-4">
    <Skeleton width="120px" height="32px" />
    <div className="hidden md:flex items-center space-x-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} width="60px" height="20px" />
      ))}
      <Skeleton width="80px" height="32px" />
    </div>
    <div className="md:hidden">
      <Skeleton width="24px" height="24px" />
    </div>
  </div>
);

export default Skeleton;

