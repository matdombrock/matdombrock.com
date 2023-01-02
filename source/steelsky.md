<steelsky>
{
  "title":"SteelSky",
  "description":"Information about SteelSky."
}
</steelsky>
# SteelSky
SteelSky is a *very* lightweight, no BS static site generator written in NodeJS.

## Why did I write this? 
Over the years I've had my site running on several different systems. Off the top of my head:
* Wordpress
* Jekyll
* Wordpress (again)
* [A custom static site generator I wrote in python](https://github.com/NebulaCyberSolutions/IronSky)
* Wordpress (again, I think)
* [Hexo](https://hexo.io/)
* [CMS.js](https://www.npmjs.com/package/cmsjs)

I won't go into to detail about why each one of these systems wasn't what I was looking for because ultimately they all had the same problem. **They are all much more complex than then need to be.** 

What I was looking for a was a system that would offer these features:
* Turn Markdown into valid HTML
* Handle syntax highlighting
* Handle indexing/listing files 

I think that a static site generator should be as simple as possible only doing the bare minim required to generate the site. 