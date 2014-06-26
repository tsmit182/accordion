// $('.accordHead').on('click', function () {
// 	$(this).child().removeClass('hidden').siblings().addClass('.hidden')
// }

// $('.accordHead').on( 'click', function() {
// 		$(this).child().removeClass('.hidden');


$('.accordBody').hide();
$('.accordHead').click(function() {
	$('.accordBody').hide();
	$(this).next().show();
});