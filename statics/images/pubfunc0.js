// JavaScript Document
    function AddFavorite(sURL, sTitle)
    {
        try
        {
            window.external.addFavorite(sURL, sTitle);
        }
        catch (e)
        {
            try
            {
                window.sidebar.addPanel(sTitle, sURL, "");
            }
            catch (e)
            {
                alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
            }
        }
    }
	
    function SetHome(obj,vrl)
    {
        try
        {
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("�˲�����������ܾ�������ɱ�����Ȩ��");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
    }
	
	//��ʼλ��,��λpx
	var ss=0;
	
	//�����߶�,��λpx
	var step=31;
	
	function jc_marquee(elemtid,y){
		$('#'+elemtid).animate({top: '-'+y+'px'} , "slow");
	}
	
	function jc_vmarquee(id,time){
		
		ss=ss+step;
		if (ss>$('#'+id).height()-step){
			ss=00;
		}
		setTimeout("jc_marquee('"+id+"',"+ss+");jc_vmarquee('"+id+"',"+time+")",time);
	}
	 
	
	//����ҳ���������
	function hideright(a){
	if (a==1)
	{
		$('.pright').hide();
		$('.pleft').width(982);
		$('.hiderightbtn').attr('href','javascript:hideright(2);');
		$('.hiderightbtn').attr('title','��ʾ�����');
		$('.hiderightbtn').html("<img src='/images/icon/26.png'/>");
	}
	else 
	{
		$('.pright').show();
		$('.pleft').width(636);
		$('.hiderightbtn').attr('href','javascript:hideright(1);');
		$('.hiderightbtn').attr('title','���ز����');
		$('.hiderightbtn').html("<img src='/images/icon/27.png'/>");
	}
	};
	
	//����ҳ�ı������С
	function changetextsize(a){
		if (a==1)
		{
			$('#content').css('font-size','14px');
			$('#content').css('line-height','28px');
		}
		if (a==2)
		{
			$('#content').css('font-size','16px');
			$('#content').css('line-height','32px');
		}
	};
	
	

	
	
