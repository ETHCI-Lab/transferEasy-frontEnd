import FileSaver from "file-saver"

export const exportData = (data:{},name:string)=>{
    try {
        const json = JSON.stringify(data)
        const blob = new Blob([json],{type:''})
        FileSaver.saveAs(blob,name)
    } catch (error) {
        console.error(error)
    }
}