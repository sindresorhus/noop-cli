import test from 'ava';
import execa from 'execa';

test(async t => {
	const {stdout} = await execa('./cli.js');
	t.is(stdout.length, 0);
});
