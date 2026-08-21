import React from 'react';
import * as Icons from 'lucide-react';

export default function DynamicIcon({ name, className = 'w-5 h-5', fallback = 'Shield' }) {
  const IconComponent = Icons[name] || Icons[fallback] || Icons.Shield;
  return <IconComponent className={className} aria-hidden="true" />;
}
