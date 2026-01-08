import { KanaWave } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kana Wave - Rhythmic Learning | KanaDojo',
  description: 'Catch the Japanese characters in sync with the rhythm.'
};

export default function WavePage() {
  return <KanaWave />;
}
