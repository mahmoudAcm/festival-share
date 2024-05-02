import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error('failed to fetch url');

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    console.log(error);
  }
}
