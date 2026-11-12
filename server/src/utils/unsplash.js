import { createApi } from 'unsplash-js';

const unsplash = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

export async function getImageForQuery(query) {


  const res = await unsplash.search.getPhotos({ query, perPage: 1, orientation: 'landscape' });
  if (res.type === 'success' && res.response.results.length) {
    const photo = res.response.results[0];
    return photo.urls.small;
  }
  return null;
}
