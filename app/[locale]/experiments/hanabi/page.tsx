import { Hanabi } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanabi - Kana Fireworks | KanaDojo',
  description: 'Launch beautiful Japanese character fireworks in the night sky.'
};

export default function HanabiPage() {
  return <Hanabi />;
}
