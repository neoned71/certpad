import  Certificates  from '../../node_models/certificates';

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	var ret ={status:"failed",message:"certificate not found",}
    console.log(req.user._id);
    const certificate = await Certificates.getCertificate(slug);
	if(certificate)
	{
		ret.certificate=certificate;
		ret.status="success";
		ret.message= "certificate aquired";
		
	}
	res.json(ret);
}
