import {LanguageCode, SourceInfo, TagType} from "paperback-extensions-common";
import {Madara} from '../Madara'

const TOONILY_DOMAIN = "https://toonily.com"

export const ToonilyInfo: SourceInfo = {
    version: '1.1.2',
    name: 'Toonily',
    description: 'Extension that pulls manga from toonily.com',
    author: 'GameFuzzy',
    authorWebsite: 'http://github.com/gamefuzzy',
    icon: "icon.png",
    hentaiSource: false,
    websiteBaseURL: TOONILY_DOMAIN,
    sourceTags: [
        {
            text: "Notifications",
            type: TagType.GREEN
        },
        {
            text: "18+",
            type: TagType.YELLOW
        },
        {
            text: "Cloudflare",
            type: TagType.RED
        }
    ]
}

export class Toonily extends Madara {
    baseUrl: string = TOONILY_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
    hasAdvancedSearchPage: boolean = true
    sourceTraversalPathName: string = 'webtoon'
    userAgentRandomizer = ''
}
