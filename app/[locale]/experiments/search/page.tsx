import { KanaSearch } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kana Search - Grid Challenge | KanaDojo',
  description:
    'Find the target Japanese character in a grid of similar-looking ones.'
};

export default function SearchPage() {
  return <KanaSearch />;
}
