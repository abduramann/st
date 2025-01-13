function FindProxyForURL(url, host) {
	if(shExpMatch(url, "*ekstat.com*"))
		return "DIRECT";
var sites = [
'coin-turk.com',
'eksisozluk2023.com',
'mav.xyz',
'incognito.org',
'worldcoin.org',
'airdrops.fyi',
'galxestatic.com',
'galxe.com',
'zklend.com',
'gitcoin.co',
'starknetturkiye.org',
'investing.com',
'x.com',
'whatsmyip.org',
'beehiiv.com',
'googleadservices.com',
'kazancliofis.com',
'51pool.online',
'reddit.com',
'unmineable.com',
'unminable.com',
'caterpillartoken.com',
'nigella.io',
'borpatoken.com',
'starkscancdn.com',
'leprechauntoken.com',
'brewlabs.info',
'defibit.io',
'publicnode.com',
'hinkal.pro',
'telegram.org',
'beincrypto.com',
'unicrypt.network',
'uncx.network',
'teamviewer.com',
'easycake.io',
'ebay.com',
'ebayimg.com',
'torrentmac.net',
'milkyway.zone',
'bemo.fi',
'mytonswap.com',
'ton-tech.org',
'tonapi.io',
'tonhubapi.com',
'mullvad.net',
'amazonaws.com',
'zyfi.org',
'dynv6.net',
'rumble.com',
'1a-1791.com',
'kom.com.tr',
'publicnode.com',
'clusters.xyz',
'ironforge.network',
'frogonbnb.com',
'truthsocial.com',
];	

for (let i = 0; i < sites.length; i++) {
	if(shExpMatch(url, "*" + sites[i] + "*"))
	{
		return "PROXY localhost:3128";
	}
}


	if (shExpMatch(url, "*twitter.com*") || shExpMatch(url, "*twimg.com*") || shExpMatch(url, "*google-analytics.com*")  || shExpMatch(url, "*facebook.com*") || shExpMatch(url, "*fbcdn.net*") || shExpMatch(url, "*telegram.org*") || shExpMatch(url, "*instagram.com*") 
|| shExpMatch(url, "*dailymotion.com*") || shExpMatch(url, "*dmcdn.net*")  || shExpMatch(url, "*soz.lk*")  || shExpMatch(url, "*socialblade.com*") || shExpMatch(url, "*facebook.net*") || shExpMatch(url, "*vidyome.com*") ||
 shExpMatch(url, "*t.co*") ||   shExpMatch(url, "*streamable.com*") ||   shExpMatch(url, "*incognito.best*") || shExpMatch(url, "*telegram.org/#/im*") || shExpMatch(url, "*sketchtoy.com*") || shExpMatch(url, "*buidl.me*")
|| shExpMatch(url, "*tipcoin.app*") || shExpMatch(url, "*.lbryplayer.xyz*") || shExpMatch(url, "*portablegis.xyz*") || shExpMatch(url, '*pizza.report*') || shExpMatch(url, '*pscp.tv*') || shExpMatch(url, '*secretswap.io*') 
|| shExpMatch(url, '*tiktok.com*') || shExpMatch(url, '*pancakeswap.finance*') || shExpMatch(url, '*gstatic.com*') || shExpMatch(url, '*twimg.com*')|| shExpMatch(url, '*convertkit-mail2.com*')
|| shExpMatch(url, '*telegra.ph*') || shExpMatch(url, '*coinotag.com*') || shExpMatch(url, '*imgur.com*') || shExpMatch(url, '*intercom-mail.com*') || shExpMatch(url, '*tumblr.com*')
|| shExpMatch(url, '*multichain.xyz*') || shExpMatch(url, '*renproject.io*')  || shExpMatch(url, '*turtlepay.io*') || shExpMatch(url, '*bscproject.org*') || shExpMatch(url, '*9gag.com*') || shExpMatch(url, '*gatorswap.xyz*')
|| shExpMatch(url, '*akamaized.net*') || shExpMatch(url, '*icanhazip.com*')  || shExpMatch(url, '*featured.market*') || shExpMatch(url, '*energiswap.exchange*') || shExpMatch(url, '*autoshark.finance*') 
|| shExpMatch(url, '*marketacross.com*') || shExpMatch(url, '*anneysen.com*') || shExpMatch(url, '*strongblock.com*') || shExpMatch(url, '*basketdao.org*') || shExpMatch(url, '*plaync.com*') || shExpMatch(url, '*cryptopay.me*') 
|| shExpMatch(url, '*dzone.com*') || shExpMatch(url, '*t.me*') || shExpMatch(url, '*minergate.com*') || shExpMatch(url, '*fox-24.com*') || shExpMatch(url, '*gasdao.org*') || shExpMatch(url, '*youtu.be*') 
|| shExpMatch(url, '*onedio.com*') || shExpMatch(url, '*everrise.com*') || shExpMatch(url, '*secretanalytics.xyz*') || shExpMatch(url, '*simdis.nrl.navy.mild*') || shExpMatch(url, '*havenprotocol.org*')  
|| shExpMatch(url, '*tvplus.com*') || shExpMatch(url, '*wormholenetwork.com*') || shExpMatch(url, '*portalbridge.com*') || shExpMatch(url, '*notion.site*') || shExpMatch(url, '*bnbchain.org*') || shExpMatch(url, '*soundcloud.com*')
|| shExpMatch(url, '*meetup.com*') || shExpMatch(url, '*investing.com*') || shExpMatch(url, '*krttv.com*') || shExpMatch(url, '*hizliresim.com*') || shExpMatch(url, '*saasexch.com*') || shExpMatch(url, '*shop1bao.co*')
|| shExpMatch(url, '*threefold.me*') || shExpMatch(url, '*ethereumpow.org*') || shExpMatch(url, '*etherfair.org*') || shExpMatch(url, '*nearweek.com*') || shExpMatch(url, '*radiolab.org*') || shExpMatch(url, '*btn.group*')
|| shExpMatch(url, '*trivium.network*') || shExpMatch(url, '*livechatinc.com*') || shExpMatch(url, '*wardenswap.com*')  || shExpMatch(url, '*optimism.io*')   
|| shExpMatch(url, '*zkex.com*') || shExpMatch(url, '*venus.town*') || shExpMatch(url, '*starknet.io*') || shExpMatch(url, '*presearch.com*') || shExpMatch(url, '*hcaptcha.com*') || shExpMatch(url, '*redditmedia.com*')
|| shExpMatch(url, '*reddit*.com*') || shExpMatch(url, '*atomscan.com*') || shExpMatch(url, '*dw.com*') || shExpMatch(url, '*ipfs.io*') || shExpMatch(url, '*akamaized.net*') || shExpMatch(url, '*eksisozluk.com*') 
|| shExpMatch(url, '*voaturkce.com*') || shExpMatch(url, '*openfastpath.org*') || shExpMatch(url, '*flightgear.org*') || shExpMatch(url, '*ascelibrary.org*') || shExpMatch(url, '*dslab.konkuk.ac.kr*') || shExpMatch(url, '*militaryleak.com*') 
|| shExpMatch(url, '*dacis.com*') ) 
//  || shExpMatch(url, '*10kswap.com*'))
//|| shExpMatch(url, "*ekstat.com*"))
        return "PROXY localhost:3128";

// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";
 
}
