import { getItem } from '@/utilities/storage';
import { Selector } from '@/utilities/forum';
import $ from 'jquery';
import { addStyle } from '@/utilities/misc';
import CSS from '@/css/hide-top-adv-image.css';


let hideTopAdvImage: boolean | undefined;
export default async function TASK_HideTopAdvImage() {
    hideTopAdvImage = hideTopAdvImage ?? await getItem('Switch::hide-top-adv-image');
    if (!hideTopAdvImage) return;
    addStyle(CSS, 'hide-top-adv-image');

    const $bannerImg = $(Selector.TOP_ADV_BANNER);
    $bannerImg?.addClass('adv-hide');
    setTimeout(function(){
        const $sellerImg = $(Selector.TOP_ADV_SELLER);
        $sellerImg?.addClass('adv-hide');
    })
}