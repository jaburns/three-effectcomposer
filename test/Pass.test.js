const runTest = require( './utils/runner' ).run;


describe( 'Pass', () => {

	it( 'should match original in structure', ( done ) => {

		runTest( {
			test: () => {

				let error = false;

				try	{

					const A = new THREE.Pass();
					const B = new window.EffectComposer.Pass();

					chai.assert.containsAllKeys( B, A );

				} catch ( e ) {

					error = e;

				}

				return error || undefined;

			},
			callback: done,
		} );

	} );

} );
