/**
 * @file 仅使用于 src/test 下的文件
 * @description 与老的edenx集成的jest分开管理（node版本低，配置不便，不好兼容🫥
 */
import type { Config as JestConfig } from 'jest';
import type { Config as SWCConfig } from '@swc/core';

// @see https://swc.rs/docs/configuration/swcrc
const swcConfig: SWCConfig = {
    sourceMaps: true,
    jsc: {
        preserveAllComments: true,
        // parser: {
        //   syntax: 'typescript',
        //   tsx: true,
        // },
        // transform: {
        //   react: {
        //     runtime: 'automatic',
        //   },
        // },
    },
};

// @see https://jestjs.io/docs/configuration#options
const config: JestConfig = {
    testEnvironment: 'jsdom',
    transform: {
        // '^.+\\.(ts|tsx)?$': 'ts-jest',
        // '^.+\\.(js|jsx)$': 'babel-jest',
        // '^.+\\.(t|j)sx?$': ['@swc/jest', swcConfig as Record<string, unknown>],
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    rootDir: './',
    collectCoverage: true,
    coverageReporters: ['clover', 'json', 'lcov', 'text'],
    setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
};

export default config;
