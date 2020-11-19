const data = [
  { 
    src: "img/coons/photo_2020-10-29_09-29-07.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-11-11_12-58-06.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-10-31_14-14-37.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-11-13_22-34-41.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-11-06_11-25-26.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-11-14_15-17-33.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-11-06_23-10-35.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-11-17_13-17-14.jpg",
    tags: ["raccoon", "animal"],
  },
  { 
    src: "img/coons/photo_2020-11-11_12-57-54.jpg",
    tags: ["raccoon", "animal"],
  },
  {
    src: "img/frogs/photo_2020-11-05_11-46-58.jpg",
    tags: ["frog", "animal"]
  },
  {
    src: "img/frogs/photo_2020-11-18_19-20-40.jpg",
    tags: ["frog", "animal"]
  },
  {
    src: "img/frogs/photo_2020-11-14_19-33-01.jpg",
    tags: ["frog", "animal"]
  },
  {
    src: "img/frogs/photo_2020-11-18_19-20-43.jpg",
    tags: ["frog", "animal"]
  },
  {
    src: "img/frogs/photo_2020-11-18_19-20-37.jpg",
    tags: ["frog", "animal"]
  },
  {
    src: "img/frogs/photo_2020-11-18_19-20-47.jpg",
    tags: ["frog", "animal"]
  },
  {
    src: "img/frogs/photo_2020-11-18_19-20-39.jpg",
    tags: ["frog", "animal"]
  },
]

function doesTagMatch(photoInfo, query) {
  return photoInfo.tags.some(tag => 
    // tag.localeCompare(query, [], {sensitivity: 'base', usage: "search"}) == 0
    tag.toUpperCase() == query.toUpperCase()
    )
}

export function searchPhotos(query, pageNumber = 1, pageSize = 6) {
  if (query == "") {
    return {photos:[], areThereMore: false}
  }

  let allPhotos = data.filter(photoInfo => doesTagMatch(photoInfo, query))
  if (allPhotos.length <= pageSize) {
    console.log("returning all photos")
    return {photos: allPhotos, areThereMore: false};
  }

  let start = (pageNumber - 1)*pageSize;
  let end = pageSize * pageNumber;
  console.log(`returning from ${start} to ${end}`)
  return {
    photos: allPhotos.slice(start, end),
    areThereMore: allPhotos.length > pageSize * pageNumber
  }
}