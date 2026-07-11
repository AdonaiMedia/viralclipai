export async function generateHashtags(topic:string){

return[
"#viral",
"#fyp",
"#shorts",
`#${topic.replace(/\s/g,"")}`
]

}