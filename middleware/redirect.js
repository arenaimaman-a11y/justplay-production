import axios from 'axios'
import config from '~/mopie.json'

export default async function ({ route, redirect }) {
  // Cek format URL numerik: /tv/:tvId/:season/:episode
  const match = route.fullPath.match(/^\/tv\/(\d+)\/(\d+)\/(\d+)$/)
  if (!match) return

  const [_, tvId, season, episode] = match

  try {
    // Ambil data tv show (judul seri)
    const tvRes = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}`,
      { params: { api_key: config.API_KEY } }
    )

    const tvName = tvRes.data.name || `tv-${tvId}`

    // Buat slug dari judul film
    const slug = tvName
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // hapus simbol
      .replace(/\s+/g, '-')     // ganti spasi dengan '-'

    // Redirect ke URL final: /tv/:tvId/:judul-film-season-episode
    return redirect(`/tv/${tvId}/${slug}-${season}-${episode}`)

  } catch (err) {
    console.error('Redirect TMDB error:', err.message)
    return redirect(`/tv/${tvId}`)
  }
}