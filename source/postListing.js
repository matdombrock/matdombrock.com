// Grab the listing.json data from /listing.json
async function fetchListing() {
  try {
    const response = await fetch('/listing.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

async function run() {
  const listing = await fetchListing();
  if (!listing) {
    alert('Failed to load listing data.');
    return;
  }
  // console.log('Listing data:', listing);
  let posts = [];
  for (const item of listing) {
    const dir = item.path.dir;
    if (dir === 'posts') {
      // console.log('Post found:', item.path.name);
      posts.push(item);
    }
  }
  // Sort posts by date
  const oldDate = '2020-01-01'; // Applied to missing dates
  posts.sort((a, b) => {
    const dateA = new Date(a.meta.date || oldDate);
    const dateB = new Date(b.meta.date || oldDate);
    return dateB - dateA; // Sort descending
  });
  console.log('Sorted posts:', posts);
}

run()
