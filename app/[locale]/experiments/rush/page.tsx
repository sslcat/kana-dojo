import { FlashRush } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flash Rush - Speed Identification | KanaDojo',
  description:
    'Test your Japanese character recognition speed in this fast-paced game.'
};

export default function RushPage() {
  return <FlashRush />;
}
