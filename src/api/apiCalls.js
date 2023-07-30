import { getTopHeadlines } from "."

export function fetchBreakingNews({setLoading,setArticles}){
    setLoading(true)
    const data ={
        category:"general" ,
        lang:"hi",
        max:20
    }
    getTopHeadlines(data).then((res)=>{
        setLoading(false)
        setArticles(res?.data?.articles)
    }).catch(()=>setLoading(false))
}


export function fetchNationalNews({setLoading,setArticles}){
    setLoading(true)
    const data ={
        category:"nation" ,
        lang:"hi",
        max:20
    }
    getTopHeadlines(data).then((res)=>{
        setLoading(false)
        setArticles(res?.data?.articles)
    }).catch(()=>setLoading(false))
}


export function fetchInternationalNews({setLoading,setArticles}){
    setLoading(true)
    const data ={
        category:"world" ,
        lang:"hi",
        max:20
    }
    getTopHeadlines(data).then((res)=>{
        setLoading(false)
        setArticles(res?.data?.articles)
    }).catch(()=>setLoading(false))
}


export function fetchSportsNews({setLoading,setArticles}){
    setLoading(true)
    const data ={
        category:"sports" ,
        lang:"hi",
        max:20
    }
    getTopHeadlines(data).then((res)=>{
        setLoading(false)
        setArticles(res?.data?.articles)
    }).catch(()=>setLoading(false))
}


export function fetchTechnologyNews({setLoading,setArticles}){
    setLoading(true)
    const data ={
        category:"technology" ,
        lang:"hi",
        max:20
    }
    getTopHeadlines(data).then((res)=>{
        setLoading(false)
        setArticles(res?.data?.articles)
    }).catch(()=>setLoading(false))
}


export function fetchSearchArticles({setLoading,setArticles,query}){
    setLoading(true)
    const data ={
        lang:"hi",
        max:20,
        q:query
    }
    getTopHeadlines(data).then((res)=>{
        setLoading(false)
        setArticles(res?.data?.articles)
    }).catch(()=>setLoading(false))
}


