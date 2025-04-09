const Recipe = async ({
  params,
}: {
  params: Promise<{ recipeId: number }>
}) => {
  const { recipeId } = await params

  return (
    <main className="flex grow items-center justify-center">
      <h1 className="text-primary-500 text-center text-7xl font-bold">
        Receita {recipeId}
      </h1>
    </main>
  )
}

export default Recipe
