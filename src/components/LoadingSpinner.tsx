'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'green' | 'purple' | 'white';
  className?: string;
}

export const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue', 
  className = '' 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'border-neon-blue',
    green: 'border-neon-green',
    purple: 'border-neon-purple',
    white: 'border-white'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        border-2 border-t-transparent rounded-full
        ${className}
      `}
    />
  );
};

// Spinner com texto
export const LoadingSpinnerWithText = ({ 
  text = 'Carregando...', 
  size = 'md',
  color = 'blue' 
}: LoadingSpinnerProps & { text?: string }) => (
  <div className="flex flex-col items-center space-y-4">
    <LoadingSpinner size={size} color={color} />
    <p className="text-muted-foreground text-sm">{text}</p>
  </div>
);

// Spinner para botões
export const ButtonSpinner = ({ size = 'sm' }: Pick<LoadingSpinnerProps, 'size'>) => (
  <LoadingSpinner size={size} color="white" />
);

// Spinner de página completa
export const FullPageSpinner = ({ text = 'Carregando...' }: { text?: string }) => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="text-center">
      <LoadingSpinner size="xl" color="blue" className="mx-auto mb-4" />
      <p className="text-muted-foreground">{text}</p>
    </div>
  </div>
);

// Spinner com pulso
export const PulseSpinner = ({ 
  size = 'md', 
  color = 'blue' 
}: Pick<LoadingSpinnerProps, 'size' | 'color'>) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'bg-neon-blue',
    green: 'bg-neon-green',
    purple: 'bg-neon-purple',
    white: 'bg-white'
  };

  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        rounded-full
      `}
    />
  );
};

// Spinner com pontos
export const DotsSpinner = ({ color = 'blue' }: Pick<LoadingSpinnerProps, 'color'>) => {
  const colorClasses = {
    blue: 'bg-neon-blue',
    green: 'bg-neon-green',
    purple: 'bg-neon-purple',
    white: 'bg-white'
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
          className={`w-2 h-2 ${colorClasses[color]} rounded-full`}
        />
      ))}
    </div>
  );
};

// Spinner com barras
export const BarsSpinner = ({ color = 'blue' }: Pick<LoadingSpinnerProps, 'color'>) => {
  const colorClasses = {
    blue: 'bg-neon-blue',
    green: 'bg-neon-green',
    purple: 'bg-neon-purple',
    white: 'bg-white'
  };

  return (
    <div className="flex space-x-1 items-end">
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          animate={{ scaleY: [1, 2, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
          className={`w-1 h-4 ${colorClasses[color]} rounded-full origin-bottom`}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner;

