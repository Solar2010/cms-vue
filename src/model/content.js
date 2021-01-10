import { get } from '../lin/plugin/axios'

class Content {
  static async getCategoryList() {
    const list = await get('v1/content')

    return list
  }
}

export { Content as ContentModel }
