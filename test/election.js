let Election = artifacts.require("./Election.sol");

contract("Election", async accounts => {

    it("S'initialise avec deux candidats", async () => {
        const app = await Election.deployed();
        let cpt = await app.nbrCandidats();
        cptnbr = cpt.toNumber();
        assert.equal(cpt, 2);
    });

    it("Vote fonctionne si on a le droit", async () => {
        const app = await Election.deployed();
        const citoyen = accounts[1];
        await app.donnerDroitDeVote(citoyen);
        await app.voter(1, { from: citoyen });
        let ttvotes = await app.totalVotes();
        assert.equal(ttvotes.toNumber(), 1);
        const em = await app.candidats(1);
        assert.equal(em[2].toNumber(), 1);
    });

    it("Lance une exception si on essaye de voter sans avoir le droit", async () => {
        const app = await Election.deployed();
        try {
            await app.voter(1, { from: accounts[2] });
        } catch (err) {
            assert(err.message.indexOf('revert') >= 0, "error message must contain revert");
        }
    });

    it("Lance une exception si on essaye de donner le droit de vote sans etre owner", async () => {
        const app = await Election.deployed();
        try {
            await app.donnerDroitDeVote(accounts[2], { from: accounts[1] });
        } catch (err) {
            assert(err.message.indexOf('revert') >= 0, "error message must contain revert");
        }
    });


    it("Citoyen ne peut pas voter deux fois", async () => {
        const app = await Election.deployed();
        const citoyen = accounts[2];
        await app.donnerDroitDeVote(citoyen);
        await app.voter(1, { from: citoyen });
        try {
            await app.voter(1, { from: citoyen });
        } catch (err){
            assert(err.message.indexOf('revert') >= 0, "error message must contain revert");
        }
        let ttvotes = await app.totalVotes();
        assert.equal(ttvotes.toNumber(), 2);
        const em = await app.candidats(1);
        assert.equal(em[2].toNumber(), 2);
    });

});