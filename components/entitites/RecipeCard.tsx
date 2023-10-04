import Link from 'next/link';

const RecipeCard = ({posts}) => {
return (
    <div className="w-120 h-40 bg-amber-300 mb-4">
      <h3>{posts.title}</h3>
      <article>{posts.subtitle}</article>
      <Link href={`recipes/${posts.slug}`}>Готовить</Link>
    </div>
)
}

export default RecipeCard;
