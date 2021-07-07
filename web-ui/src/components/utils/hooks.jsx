import { useEffect } from "react"

export const useScrollToTop = (title) => {
    useEffect(() => {
        document.title = title;
        try {
            window.scroll({
                'top': 0,
                'left': 0,
                'behavior': "smooth"
            })
        } catch (err) {
            console.error(err)
        }
    }, [title])
}
