import { row, col, css } from './utils'


function title(block) {
	const tag = block.options.tag ?? 'h1'
	return row(col(`<${tag}>${block.value}<${tag}/>`), css(block.options.styles))
}

function text(block) {
	return row(col(`<p>${block.value} </p>`), css(block.options.styles))
}
function image(block) {
	console.log(block)
	return row(`<img src="${block.value}" style="${css(block.options.imageStyles)}"/>`, css(block.options.styles))
}

function columns(block) {
	const html = block.value.map(item => col(item))
	return row(html.join(''), css(block.options.styles))
}



export const templates = {
	title: title,
	text: text,
	columns: columns,
	image: image

}