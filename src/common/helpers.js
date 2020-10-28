export const getNoteTitle = (noteContent) => {
    const str = noteContent.replace(/\W/g, ' ')
    return str.match(/(^(?:\S+\s+\n?){1,8})/).pop()
}