let Election = artifacts.require("./Election.sol");

contract("Election", async accounts => {

    it("S'initialise avec deux candidats", async () => {
        const app = await Election.deployed();
        let cpt = await app.nbrCandidats();
        cptnbr = cpt.toNumber();
        assert.equal(cpt,2);
    });
    
    it("Vote fonctionne si on a le droit", async() => {
        const app = await Election.deployed();
        const owner = accounts[0];
        const citoyen = accounts[1];
        await app.donnerDroitDeVote(citoyen);
        await app.voter(1, { from: citoyen });
        let ttvotes = await app.totalVotes();
        assert.equal(ttvotes.toNumber(),1);
        const em = await app.candidats(1);
        assert.equal(em[2].toNumber(),1);
    });

    it("Lance une exception si on essaye de voter sans avoir le droit", async () => {
        const app = await Election.deployed();
        app.voter(1,{ from: accounts[1] }, err => {
            assert(err.message.indexOf('revert') >= 0, "error message must contain revert");
        });
    });

});