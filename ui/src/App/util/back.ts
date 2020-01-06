export default (url: string): string => {
  const newUrl =
    url.endsWith('/')
      ? url
        .substring(
          0,
          url
            .length - 1,
        )
      : url

  return newUrl
    .replace(
      new RegExp(
        `${newUrl.substr(newUrl.lastIndexOf('/'))}$`,
      ),
      '',
    )
}
