import { Gif, GiphyItem } from "../interfaces";

export class GifMapper {

    static mapGiphy(items: GiphyItem[]) : Gif[] {
        return items.map(this.mapGiphyItem)
    }

    static mapGiphyItem(item: GiphyItem) : Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }
}