import { KanaTrace } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kana Trace - Practice Drawing | KanaDojo',
  description:
    'A relaxing playground to practice drawing Japanese kana characters.'
};

export default function TracePage() {
  return <KanaTrace />;
}
