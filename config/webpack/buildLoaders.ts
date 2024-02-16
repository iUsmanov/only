import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgrLoader } from './loaders/buildSvgrLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
		// dependency: { not: ['url'] },
	};

	// const babelLoader = buildBabelLoader(options.isDev);
	const codeBabelLoader = buildBabelLoader(options.isDev, false);
	const tsxCodeBabelLoader = buildBabelLoader(options.isDev, true);

	const scssLoader = buildScssLoader(options.isDev);

	return [
		assetsLoader,
		svgrLoader,
		codeBabelLoader,
		tsxCodeBabelLoader,
		scssLoader,
		buildScssLoaderA(options.isDev),
	];
}

export function buildScssLoaderA(isDev: boolean): webpack.RuleSetRule {
	const scssLoader = {
		test: /\.css$/i,
		include: /node_modules\\swiper/,
		use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	};

	return scssLoader;
}
