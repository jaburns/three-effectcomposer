const runTest = require( './utils/runner' ).run;


describe( 'EffectComposer', () => {

	it( 'should match original in structure', ( callback ) => {

		runTest( {
			test: () => {

				let error;

				try	{

					const renderer = new THREE.WebGLRenderer();
					const A = new THREE.EffectComposer( renderer );
					const B = new window.EffectComposer.default( renderer );

					chai.assert.containsAllKeys( B, A );

				} catch ( e ) {

					error = e;

				}

				return error;

			},
			callback,
		} );

	} );

} );
