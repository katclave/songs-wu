export function filterRoyalties(royalties, id){
  return royalties.data.records.find((song) => {
    return song.id === id
  })
}
