import { useState } from 'react';
import { cn } from '../../../lib/utils';

export default function Search({ scrollCondition, className }) {
  const [search, setSearch] = useState('');

  return (
    <input
      className={cn(
        'px-3 py-2 border rounded-lg',
        scrollCondition
          ? 'bg-transparent bg-opacity-95 border-gray-500'
          : 'bg-white bg-opacity-30 ',
        className
      )}
      placeholder="Search ..."
      value={search}
      onInput={(e) => setSearch(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === 'Enter' || e.code === 'Enter')
          window.location.href = `/?search=${search}`;
      }}
    />
  );
}
