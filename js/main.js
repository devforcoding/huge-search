(function ($) {

    $(document).ready(function () {
        const $searchBox = $('.search-box');
        const $needle = $searchBox.find('[name="needle"]');
        const hugeSearch = function(needle) {
            const $items = $('.content ul > li');
            $items.removeClass('found');
            $items.each((i, item) => {
                const $item = $(item);
                if (-1 !== $item.find('span').text().toLowerCase().indexOf(needle.toLowerCase())) {
                $item.addClass('found');
                item.wasFound = (item.wasFound === undefined) ? 1 : item.wasFound + 1;
                if (10 <= item.wasFound) {
                    $item.addClass('favorite');
                }
            }
        });
    };
        $searchBox.submit(function (e) {
            e.preventDefault();
            const $this = $(this);
            // console.log($this.serialize());
            const needle = $needle.val();
            console.log(needle);
            if (3 <= needle.length) {
                hugeSearch(needle);

            } else {
                $needle.addClass('invalid');
                return;
            }
        });
        $needle.keyup(function () {
            const $this = $(this);
            $this.removeClass('invalid');

        });

        $('a').click(function() {
            $(this).attr('target', '_blank');
        });
    });
    })(jQuery);
