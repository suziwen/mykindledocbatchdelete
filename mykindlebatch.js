var datas = itemCache.theData;
var searchKey = '';
var sid = mykJS.sessionId; //会话ID，用户需要登录

function searchDatas(searchKey,datas){
	var resultDatas = [];
	if (!!searchKey) {
		searchKey = searchKey.toUpperCase();
		jQuery.each(datas,function(index, data) {
			if ( data.title && data.title.toUpperCase().indexOf(searchKey) >= 0) {
				resultDatas.push(data);
			}
		});
	}
	return resultDatas;
}


function deleteDatas(deleteDatas , callback){
	if (deleteDatas.length > 0) {
		if(!callback || !jQuery.isFunction(callback)){
			callback = function(resp) {
				var object;
				try {
					object = eval("(" + resp + ")");
				} catch (e) {
					return;
				}
				if (object.error) {
					console.log(object.error);
				} else {
					console.log("success");
				}
			}
		}
		jQuery.each(deleteDatas,function(index, data) {
			var loanId = '';
		    // assign the above vars where appropriate
		    if(data.loanId) 
		    {
		        loanId = data.loanId;
		    }
		   var asin = '';
		   if(data.asin){
			   asin = data.asin;
		   }
		    if(data.category === "kindle_pdoc"){
		        mykJS.log("pdocs","delete");
		    }
			var ajaxMsgString = "contentName=" + asin + "&loanId=" + loanId
					+ "&sid=" + sid + "&isAjax=1" + "&category="
					+ data.category + "&csrfX="
					+ "3830AB76825CC2930C6A6C629AE14BF77DF885F9" + "&csrfY="
					+ "XDdfmnKXF3y8WdVy4dCHncB";
			Fion.gufsAjaxObj.makeRequest(ajaxMsgString, callback);
		});
	}
}
//执行部分
var searchResults =  searchDatas(searchKey,datas);

deleteDatas(searchResults);