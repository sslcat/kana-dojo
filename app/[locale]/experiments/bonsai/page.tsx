import { ZenBonsai } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zen Bonsai - Mindful Growth | KanaDojo',
  description:
    'Nurture your own digital Japanese character tree in this mindful clicker.'
};

export default function BonsaiPage() {
  return <ZenBonsai />;
}
