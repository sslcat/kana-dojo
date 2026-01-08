import { KanaPop } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kana Pop - Bubble Popping Fun | KanaDojo',
  description:
    'Pop bubbles with Japanese characters for a fun learning experience.'
};

export default function PopPage() {
  return <KanaPop />;
}
