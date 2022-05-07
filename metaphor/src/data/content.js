export class Content {
    constructor(id, name, title, year, authors, picture, group, url, publication, innerContent) {
        this.id = id;//唯一标识
        this.name = name;//显示给用户
        this.title = title;
        this.year = year;
        this.authors = authors;//作者
        this.picture = picture;//图片路径
        this.group = group;//筛选组
        this.url = url;
        this.publication = publication;
        this.innerContent = innerContent;//详细描述(比如摘要)
    }
}
