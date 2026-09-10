import type { Rule } from '../types.ts';
import { electronDependency } from './electron-dependency.ts';
import { linuxDebTarget } from './linux-deb-target.ts';
import { lockfile } from './lockfile.ts';
import { packageJson } from './package-json.ts';

/**
 * 默认规则集。顺序即报告中同级别问题的顺序。
 * 只收录阈值来源明确的规则；待真机验证的候选规则见 docs/opc-doctor-first.md。
 */
export const builtinRules: readonly Rule[] = [packageJson, electronDependency, lockfile, linuxDebTarget];
