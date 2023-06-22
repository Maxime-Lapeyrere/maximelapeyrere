import { Metadata } from "next"
import { title } from "process"

interface PageProps{
    params: {
        articleId: string
    }
}

type Article = {
    userId: number
    id: number
    title: string
    body: string
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {

    // lien du fetch à remplacer par le lien de l'api pour aller chercher les articles du blog
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.articleId}`)

    const data = (await res.json()) as Article
    return {title:data.title}
}


const page = async({params}:PageProps) => {
  return (
    <div>bienvenue sur le blog</div>
  )
}

export default page