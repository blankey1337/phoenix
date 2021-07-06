export function compatRSAddress (rsAddress: string): string {
  return rsAddress.replace(/^(TS|S)-/, 'BURST-');
}
