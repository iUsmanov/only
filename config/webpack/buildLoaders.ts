import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildScssLoader, buildScssLoaderForSwiper } from './loaders/buildScssLoader';
import { buildSvgrLoader } from './loaders/buildSvgrLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	// Если не юзаем typescriptLoader, нужен babelLoader
	// const typescriptLoader = {
	// 	test: /\.tsx?$/,
	// 	use: 'ts-loader',
	// 	exclude: /node_modules/,
	// };

	const svgrLoader = buildSvgrLoader();

	const assetsLoader = {
		test: /\.(png|jpg|gif|woff|woff2)$/i,
		type: 'asset/resource',
	};

	const codeBabelLoader = buildBabelLoader(options.isDev, false);
	const tsxCodeBabelLoader = buildBabelLoader(options.isDev, true);

	const scssLoader = buildScssLoader(options.isDev);
	const scssLoaderForSwiper = buildScssLoaderForSwiper(options.isDev);

	return [
		assetsLoader,
		svgrLoader,
		codeBabelLoader,
		tsxCodeBabelLoader,
		scssLoader,
		scssLoaderForSwiper,
	];
}
