import { KanaNebula } from '@/features/Experiments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kana Nebula - Deep Space Exploration | KanaDojo',
  description:
    'An immersive space flight experience through Japanese character star clusters.'
};

export default function NebulaPage() {
  return <KanaNebula />;
}
