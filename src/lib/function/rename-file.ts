export const renameFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = Math.floor(Math.random() * 1000000)
    const nameProject = 'image'
    const input = e.currentTarget

    if (!input.files) return

    const previousFile = input.files[0]
    // this need check to work ${previousFile.name.split('.')[1]}

    const newFile = new File([previousFile], `${nameProject}_${newName}.${previousFile.name.split('.').at(-1)}`)
    const dT = new DataTransfer()
    dT.items.add(newFile)
    input.files = dT.files

    return input.files.item(0)
}