export const hostImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file)
    let res = await fetch(import.meta.env.VITE_imageBB, {
        method : "POST",
        body: formData,
    })
    let data = await res.json();
    return data?.data?.display_url
}